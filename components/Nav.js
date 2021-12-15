import React from 'react'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const Nav = () => {
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 0)
    }

    useEffect(() => {
        var checkbox = document.querySelector('input[name=mode]');
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dartheme')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'lighttheme')
            }
        })
    }) 
    const router = useRouter();
    const redirectToPage = (page) => {
        router.push(page)
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            </Head>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" data-toggle="collapse" role="button" aria-expanded="false" href='#details'
                    aria-controls="collapseExample" style={{cursor: 'pointer'}}>Chandan Bansal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => redirectToPage('/#education')}>Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => redirectToPage('/#skills')}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => redirectToPage('/#internships')}>Internships</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => redirectToPage('/#projects')}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => redirectToPage('/blogs')}>Blogs</a>
                        </li>
                        {/*Dark Mode*/}
                        <li className="nav-item darkmode_toggler">
                            <input className="container_toggle" type="checkbox" id="switch" name="mode" />
                            <label for="switch">Toggle</label>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
