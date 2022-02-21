interface IRequestOptions {
  [index: string]: string | number | boolean | Date | undefined;
  language?: string;
  page?: number;
  query?: string;
}

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '0014f684a9cfc5a1278bcc7f5542de37';

export default function controller(request: string, options: IRequestOptions): string {
  const keys = Object.keys(options);

  let url = '';
  url = url.concat(baseURL, request, '?', 'api_key=', apiKey);

  keys.forEach((elem) => {
    url += `&${elem}=${options[elem]}`;
  });

  return url;
}
