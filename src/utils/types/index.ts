export type RequestType = {
    headers: {
        authorization: string;
    };
    user: any;
    originalUrl: string;
};

export type ResponseType = {
    status: (arg0: number) => {
        (): any;
        new (): any;
        json: any;
    };
    json: any;
};

export type NextType = any

export type ErrorType = { 
    code: number;
    status: number; 
    name: any; 
    message: any 
};
