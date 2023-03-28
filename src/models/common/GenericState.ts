export type Status = 'IDLE' | 'LOADING' | 'FAILED' | 'LOADING MORE';
// 'LOADING MORE' é usado apenas quando os dados buscados são anexados aos dados atuais 

export interface GenericState<T> {
    value: T;
    status: Status;
    error?: string;
    param?: string
}