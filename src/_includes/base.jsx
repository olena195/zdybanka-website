export default ({title, children}) => (<html>
<head>
    <title>{title}</title>
    <link rel="stylesheet" href="/styles.css"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

</head>
<body>
<div id={'wrapper'}>

    {children}

</div>
</body>
</html>);
