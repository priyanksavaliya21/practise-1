import Head from "next/head";

const Meta = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript , nextapp" />
        <meta name="author" content="priyank savaliya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
    </>
  );
};

export { Meta };
