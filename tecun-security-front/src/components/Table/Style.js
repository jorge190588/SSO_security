export const styles = theme => ({
    root: {
        "@media print":{
            display: 'none',
        },
        marginLeft:'2%',
        marginRight: '2%',
        "& >div": {
            "& >div": {
                "& >div": {
                    "& >div": {
                        "& >div": {            
                            "& >table": {
                                "& >thead":{
                                    "& > tr":{
                                        "& >th":{
                                            textAlign:'center',
                                            fontSize: '1em',
                                            padding: 1,
                                            "& >span":{
                                                "& >div":{
                                                    fontWeight: 'bold',
                                                }
                                            }
                                        }
                                    }
                                },
                                "& >tbody": {
                                    "& >tr": {
                                        "& >td": {
                                            padding: 1,
                                            textAlign:'center',
                                            fontSize:'0.8rem',
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    },
});

