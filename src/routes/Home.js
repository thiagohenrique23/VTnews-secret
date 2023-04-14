import React, { useEffect, useState } from 'react'

function Home() {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v3/noticias')
            .then(response => response.json())
            .then(data => {
                setNews(data.items)
            })
            .catch(error => {
                console.log(error);
            });
    })

    return (
        <div>
            <h1>ULTIMAS NOTÍCIAS</h1>
            <div>
                {news.map(news => {
                    return (
                        <div key={news.id}>
                            <h3>{news.titulo}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Home