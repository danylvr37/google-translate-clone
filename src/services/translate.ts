import {FromLanguage, Language} from '../types.d'

/*
  Esta ApiKey no debería estar en el cliente pues cualquiera puede tener acceso a ella.
  La razón por la que está aquí es porque este ejemplo está enfocado en React y Typescript.
  Para mayor seguridad, deberías hacer una API en el backend con dicha clave.
*/

const apiKey = '61bc9038-95ce-4cb8-bce0-e50f2af081e4:fx'
const DEEPL_PROXY_URL = '/api/translate'

export async function deeplTranslate({
  fromLanguage,
  toLanguage,
  text,
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}): Promise<string> {
  if (!apiKey) {
    console.error('No se encontró la clave de API')

    return 'Error en la traducción'
  }

  if (fromLanguage === toLanguage) return text

  const body = new URLSearchParams({
    text: text,
    source_lang: fromLanguage,
    target_lang: toLanguage,
  })

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `DeepL-Auth-Key ${apiKey}`,
    },
    body: body.toString(),
  }

  try {
    const response = await fetch(DEEPL_PROXY_URL, options)

    if (!response.ok) {
      console.error('Error en la respuesta de la API:', response.status, response.statusText)
      throw new Error('Error en la traducción')
    }

    const translateResult: TranslateResult = await response.json()

    return translateResult.translations[0].text
  } catch (error) {
    console.error('Error al traducir:', error)

    return 'Error en la traducción'
  }
}

interface TranslateResult {
  translations: {
    text: string
  }[]
}
