export type RequestType = {
    headers: {
        authorization: string;
    };
    user: any;
};

export type ResponseType = {
    status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: string): void; new (): any };
    };
    json: (arg0: { message: string }) => any;
};
