import { makeStyles } from "@material-ui/core/styles";

const mainStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
      },
    },
    pageContent: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    pageTitleHold: {
        marginRight: '20px',
        borderRight: '1px solid #e0e0e0',
        paddingRight: '20px'
    },
    pageNav: {
        position: 'relative',
        marginBottom: '50px',
        paddingBottom: '12px',
        '& a': {
            fontSize: '1.2em',
            color: '#000',
            fontWeight: 500,
            marginRight: '50px',
            position: 'relative',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'none',
                color: '#7131ff'
            },
            '&:last-of-type': {
                marginRight: 0
            },
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '1px',
            width: '100%',
            background: '#EEEEEE'
        },
        '& $innerNav': {
            fontWeight: 600,
            color: '#7131ff',
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                height: '2px',
                width: '100%',
                background: '#7131ff',
                zIndex: 2
            }
        },
    },
    innerNav: {
        fontWeight: 600,
        color: '#7131ff'
    },
    pageTitle: {
        fontSize: '2em',
        lineHeight: '1',
        fontWeight: 700
    },
    pageDesc: {
        fontSize: '1em',
        lineHeight: '1',
        paddingTop: '4px'
    },
    mainButton: {
      borderRadius: '100px',
      border: '2px solid #7131FF',
      background: '#7131FF',
      color: '#fff',
      padding: '12px 30px',
      fontSize: '1.1em',
      textTransform: 'none',
      position: 'relative',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease-in-out',
      lineHeight: '1',
      display: 'inline-block',
      '& svg': {
            marginRight: '5px',
            fill: '#fff'
      },
      '& div': {
            fontWeight: 600,
      },
      '&:hover': {
        border: '2px solid #000',
        background: '#000',
        color: '#fff',
        '& span': {
            color: '#fff',
        },
        '& svg': {
            fill: '#fff',
        }
      }
    },
    borderButton: {
      borderRadius: '100px',
      border: '2px solid #7131FF',
      background: '#fff',
      color: '#7131FF',
      padding: '12px 30px',
      fontSize: '1.1em',
      position: 'relative',
      textTransform: 'none',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease-in-out',
      lineHeight: '1',
      display: 'inline-block',
      '& svg': {
            marginRight: '5px',
            fill: '#7131FF'
      },
      '& div': {
            fontWeight: 600,
      },
      '&:hover': {
        border: '2px solid #000',
        background: '#000',
        color: '#fff',
        '& span': {
            color: '#fff',
        },
        '& svg': {
            fill: '#fff',
        }
      }
    },
    bodyContent: {
        marginTop: '20px',
        marginBottom: '40px',
        '& h4': {
            marginBottom: '10px',
            fontWeight: 700
        },
        '& p': {
            lineHeight: '1.6'
        },
        '& ul': {
            lineHeight: '1.6',
            marginLeft: '40px',
            listStyle: 'disc',
            '& li': {
                marginBottom: '5px',
                lineHeight: '1.6'
            }
        },
        '& ol': {
            lineHeight: '1.6',
            marginLeft: '40px',
            '& li': {
                marginBottom: '5px',
                lineHeight: '1.6'
            }
        }
    },
    cardHold: {
        margin: 0,
        marginTop: '20px',
        border: '1px solid #dedede',
        borderRadius: '8px',
        boxSizing: 'border-box',
        padding: '30px 40px',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        height: 'calc(100% - 20px)'
    },
    cardTitle: {
        fontSize: '1.2em',
        color: '#7131FF',
        transition: 'all 0.3s ease-in-out',
        fontWeight: 600,
        margin: '10px 0 5px'
    },
    cardDesc: {
        lineHeight: '1.6',
        marginBottom: '15px'
    },
    infoBox: {
        margin: '0 0 20px',
        border: '1px solid #7131FF',
        borderRadius: '8px',
        boxSizing: 'border-box',
        padding: '20px 20px',
        width: '100%',
        lineHeight: 1.6,
        maxWidth: '100%',
        overflow: 'hidden',
        background: '#f5f2fb'
    },
    contentHighlight: {
        color: '#7131FF',
        fontWeight: 600
    },
    inputHld: {
        position: 'relative'
    },
    textInput: {
        border: '1px solid #DEDEDE',
        borderRadius: '6px'
    }
}));

export {mainStyles}