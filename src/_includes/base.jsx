export default ({title, children}) => (<html>
<head>
    <title>{title}</title>
    <link rel="stylesheet" href="/styles.css"/>

</head>
<body>
    <div id={'wrapper'}>

        {children}

    </div>
</body>
</html>);
