// Interface for the data that will be inserted into DB
export interface Issue {
    title: string,
    response: string,
    description: string,
    severity: string,
    status: string
}