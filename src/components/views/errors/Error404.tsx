import ErrorPageTemplate from "./ErrorPageTemplate";

export default function Error404() {
  return (
    <ErrorPageTemplate
      errorCode={404}
      errorMessage="Strona o podanym adresie nie istnieje"
    />
  );
}
