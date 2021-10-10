const CALCULATOR_URL = "https://tcf4174rv4.execute-api.ap-southeast-2.amazonaws.com/dev/invoice"

export const calculate = async (number, amount, invoices) => {
    let requestURL = `${CALCULATOR_URL}?number=${number}&amount=${amount}&invoices=[${invoices}]`
    const response = await fetch(requestURL)
    const result = await response.json()
    return result
}