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
    }
}));

export {mainStyles}