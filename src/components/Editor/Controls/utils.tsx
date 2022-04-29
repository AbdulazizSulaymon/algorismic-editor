export const DownloadText = (text: string, name: string) => {
  var fileBlob = new Blob([text], { type: "application/octet-binary" });

  const link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(fileBlob));
  link.setAttribute("download", name);
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
};

export const preText = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,500;0,600;0,700;1,300&display=swap"
        rel="stylesheet"
      />
      <title>Algorismic</title>
      <style>
      body {
        margin: 0;
        padding: 20px;
        background-color: #eff1fe;
      }
    
      * {
        box-sizing: border-box;
      }
    
      ul {
        list-style-type: none;
      }
    
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      span,
      div,
      a {
        font-family: "Rubik", sans-serif !important;
      }
    
      p,
      span,
      div,
      a {
        font-weight: 300;
      }
      </style>
    </head>
    <body>  
  
  `;

export const postText = `</body>
  </html>`;
