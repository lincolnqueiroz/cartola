import Header from './components/Header'

function Template(props){
    return (
        <>
            <Header />
            {props.children}
        </>
        

    )
}

export default Template;