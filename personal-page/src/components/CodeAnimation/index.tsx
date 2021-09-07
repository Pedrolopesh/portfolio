import { Container, Line1, Line2, Line3, Line4, Line5 } from './style'
import Typing from 'react-typing-animation';

const CodeAnimation = () => {


    return (
        <>
            <Container>
                <Typing speed={0.00001}>
                    <Line1> {'<Templeate>'} </Line1>
                        <Line2> {'<div class="bg-full-screen bv-example-row container-header">'} </Line2>
                            <Line3> {'<div class="bg-mask">'} </Line3>
                                <br />
                                <Line4> {'<b-col class="container-header">'} </Line4>
                                    <Line5> {'<cpmLogo></cpmLogo>'} </Line5>
                                    <Line5> {'<sideMenu></sideMenu>'} </Line5>
                                <Line4> {'</b-col">'} </Line4>
                                <br />
                                <Line4> {'<div class="container text-container-home">'} </Line4>
                                    <Line5> {'<h1 class="tile-home">A portfolio created <br> by <br> Pedro Lopes</h1>'} </Line5>
                                <Line4> {'</div">'} </Line4>
                                <br />
                            <Line3> {'</div">'} </Line3>
                        <Line2> {'</div">'} </Line2>
                        
                        <br />
                        <Line2> {'<div class="container">'} </Line2>
                            <Line3> {'<h1 class="title-1">Titulo Bonito</h1>'} </Line3>
                            <Line3> {'<p class="content-1">'} </Line3>
                                <Line4> {'Lorem ipsum dolor sitm itaque nisi iste veritatis dicta eaque'} </Line4>
                                <Line4> {'Cupiditate, deserunt? Sint, itaque commodi?'} </Line4>
                            <Line3> {'</p">'} </Line3>
                        <Line2> {'</div">'} </Line2>
                        <br />

                        <Line2> {'<div class="container">'} </Line2>
                            <Line3> {'<h1 class="title-1">Projetos</h1>'} </Line3>
                        <Line2> {'</div'} </Line2>
                        <br />

                        <Line2> {'<div class="container-carousel">'} </Line2>
                            <Line3> {'<carousel></carousel>'} </Line3>
                        <Line2> {'</div'} </Line2>
                        <br />

                        <Line2> {'<div class="container-services">'} </Line2>
                            <Line3> {'<h1 class="title-1">Serviços</h1>'} </Line3>
                        <Line2> {'</div'} </Line2>
                        <br />


                        <Line2> {'<div class="container-services">'} </Line2>
                            <Line3> {'<services></services>'} </Line3>
                        <Line2> {'</div'} </Line2>
                        <br />


                        <Line2> {'<div class="mt-contact">'} </Line2>
                            <Line3> {'<contact></contact>'} </Line3>
                        <Line2> {'</div'} </Line2>

                        <Line2> {'<foot></foot>'}</Line2>

                <Line1> {'</Templeate>'} </Line1>
                </Typing>
            </Container>
        </>
    )
}

export default CodeAnimation;