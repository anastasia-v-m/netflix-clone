export default interface IFormData {
  formData: {
    email: string;
    isEmailValid: boolean;
    password: string;
    isPasswordValid: boolean;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      isEmailValid: boolean;
      password: string;
      isPasswordValid: boolean;
    }>
  >;
}
