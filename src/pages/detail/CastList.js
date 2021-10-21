import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react/cjs/react.development';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';


export default function CastList(props) {

    const { category } = useParams();

    const [casts, setCasts] = useState([])

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, props.id);
            setCasts(response.cast.slice(0, 5))

        }
        getCredits();
    }, [category, props.id])

    return (
        <div className="casts">
            {
                casts.map((item, i) => {
                   return <div className="cassts__item" key={i}>
                        <div className="casts__item__img" style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}>
                            <p className="casts__item__name">
                                {item.name}
                            </p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
