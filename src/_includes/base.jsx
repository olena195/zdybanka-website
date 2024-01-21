export default ({title, children}) => (<html lang={'uk'}>
<head>
    <title>{title}</title>
    <link rel="stylesheet" href="/assets/styles/styles.css"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <meta name="color-scheme" content="dark"/>

</head>
<body>
<div id={'wrapper'}>

    {children}

</div>
</body>
</html>);
