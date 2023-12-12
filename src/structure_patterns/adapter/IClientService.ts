/**
 * Interface through which application classes can use external service classes
 */
export interface IClientService {
    sendData(JSONData: JSON): void;
}
