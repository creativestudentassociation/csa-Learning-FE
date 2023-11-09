import Sayhai from "../components/Element/SayHai/Sayhai"
import AuthLayout from "../components/Layout/AuthLayout"
import CaraoselPage from "../components/Fragment/CaraoselPage/CaraoselPage"
import CourseProgres from "../components/Fragment/CourseProgres/CourseProgres"
import LearningPath from "../components/Fragment/LearningPath/LearningPath"
import CodeChalenge from "../components/Fragment/CodeChalenge/CodeChalenge"
import { caraosel1, codeigniter, diamond, firebase, fotoProfile, principle } from "../image"
import { useLogin } from "../hook/useLogin"
import { BoxArrowRight } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"



function Home() {
    const username = useLogin()
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <AuthLayout>
            <section className="home">
                <Sayhai name={username} fotoProfile={fotoProfile} logOut={<BoxArrowRight />} onClick={handleLogout} />
                <section className="row">
                    <section className="caraoselPage col ">
                        <div className="caraosel mt-4">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>

                                <div className="carousel-inner">
                                    <CaraoselPage condition='active' interval='2000' image={caraosel1} title='front-end web developer' >
                                        Explore the pivotal role of a front-end web developer in creating seamless and engaging user interfaces for websites and web applications.
                                    </CaraoselPage>

                                    <CaraoselPage interval='2000' image={caraosel1} title='Artificial Intelligence for Marketing' >
                                        Learn how Front End is reshaping the way marketing is done at both large and small organizations.
                                    </CaraoselPage>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="courseProgres col ">
                        <h4>Course In Progress</h4>

                        <div className="mt-4">
                            <CourseProgres title='Build Your First Application' image={codeigniter} text='code igniter' />
                            <CourseProgres title='Build something beautiful' image={diamond} text='Sketch' />
                            <CourseProgres title='Firebase on Android Cloud Fire' image={firebase} text='Firebase' />
                            <CourseProgres title='Creating Custom Animations' image={principle} text='Principle' />

                        </div>


                    </section>
                </section>

                <section className="row" >
                    <section className="learningPath col ">
                        <div className="d-flex">
                            <h5 className="mt-5" >Your learning path</h5>
                        </div>
                        <div className="container row d-flex">
                            <LearningPath title='Intro to HTML' location='/Materilist' time='12 hours of video tutorials' student='423 students' modalTitle='Intro To HTML' modalDesc='Do You Wont Go To Class HTML' />
                            <LearningPath title='Become a Front-End' location='/Course' time='8 hours of video tutorials ' student='648 students' modalTitle='Become a Front-End' modalDesc='Do You Wont Go To Class Front-End' />
                            <LearningPath title='Basic Bootsrap' time='6 hours of video tutorals ' student='562 students' location='/Course' modalTitle='Basic Bootsrap' modalDesc='Do You Wont Go To Class Basic Bootsrap' />
                        </div>
                    </section>


                    <section className="codeChalenge col mt-5">
                        <CodeChalenge />
                    </section>

                </section>
            </section>

        </AuthLayout>
    )
}

export default Home