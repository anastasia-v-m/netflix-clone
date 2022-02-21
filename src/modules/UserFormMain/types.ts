export interface IFormData {
  update(value: string, isValid: boolean, isEmail: boolean): void;
}

export interface IRegFunc {
  update(firstName: string, isFirstName: boolean): void;
}

export interface IRegData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResp {
  token: string;
  user: {
    id: number;
    email: string;
    provider: string;
    socialId: string | null;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    photo: null;
    role: {
      id: number;
      name: string;
      __entity: string;
    };
    status: {
      id: number;
      name: string;
      __entity: string;
    };
    __entity: string;
  };
}

export interface IError {
  response: {
    status: number;
    data: {
      errors: Array<string>;
    };
  };
}

export interface ILoadingSVG {
  prefix: string;
}

export interface IUserFormProps {
  reg?: string;
}
