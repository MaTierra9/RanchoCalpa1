var config = {
    style: 'mapbox://styles/adnoticias/cm9rpnk8w00jz01so789a7vkh',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWRub3RpY2lhcyIsImEiOiJjbTlyb2Mzb2IxOXQzMmtvZ2RkZWoybzMxIn0.eGFfTyBGuA16Gdx92WmbOw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
        },
    insetPosition: 'bottom-right',
    theme: 'adnoticias',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Rancho Palma: Un agujero negro de la Operación Bastión',
    subtitle: 'En marzo de 2025 se realizó la operación Bastión, donde se aseguraron propiedades de la Familia en el sur del Estado de México, dominio del grupo delincuencial. Sin embargo, ya habían sido cateados años atrás; pero se presentaron como recientes. Autoridades mexiquenses y federales no brindaron explicaciones al respecto.',
    byline: 'Texto y visualización: Ivan Ortiz',
    footer: '<br> Esta visualización fue creada usando la plantilla <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'assets/AD N Logo.svg',
            description: 'A finales de marzo de 2025 autoridades estatales y federales realizaron la Operación Bastión, una serie de cateos en 21 inmuebles presuntamente utilizados por la Nueva Familia Michoacana en el Estado de México. Sin embargo, dos de de estos ranchos, Calpa y Las Piñuelas, fueron asegurados en 2020 y 2022. Así lo revelan informes albergados los Guacamaya Leaks localizados por AD Noticias. Ni la Fiscalía ni el Gobierno Mexiquense ni el Ejército ',
            location: {
                center: [-99.68780, 19.33646],
                zoom: 4.8,
                pitch: 31.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 0
                },
                {
                    layer: 'ataque-sep-2020',
                    opacity:0
                }
            ],
            onChapterExit: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 1
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 0
                }
            ]
        },
        {
            id: 'identificador-1',
            alignment: 'full',
            hidden: true,
            title: '',
            image: 'https://adnoticias.mx/wp-content/uploads/2024/12/AD-Noticias-35-anos.svg',
            description: 'A finales de marzo de 2025 autoridades estatales y federales realizaron la Operación Bastión, una serie de cateos en 21 inmuebles presuntamente utilizados por la Nueva Familia Michoacana en el Estado de México. Sin embargo, dos de de estos ranchos, Calpa y Las Piñuelas, fueron asegurados en 2020 y 2022. Así lo revelan informes albergados los Guacamaya Leaks localizados por AD Noticias. Ni la Fiscalía ni el Gobierno Mexiquense ni el Ejército ',
            location: {
                center: [-99.74307, 19.46924],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 0,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 0
                }, 
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                }
            ]
        },
        {
            id: 'identificador-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'El 30 de marzo de 2025 autoridades estatales y federales realizaron la Operación Bastión, una serie de cateos en 21 inmuebles presuntamente utilizados por la Nueva Familia Michoacana en el Estado de México. Sin embargo, dos de de estos ranchos, Calpa y Las Piñuelas, fueron asegurados en 2020 y 2022. Así lo revelan informes albergados los Guacamaya Leaks localizados por AD Noticias. Ni la Fiscalía ni el Gobierno Mexiquense ni el Ejército ',
            location: {
                center: [-99.74307, 19.46924],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 1
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 0
                }
            ]
        },
        {
            id: 'identificador-3',
            alignment: 'right',
            hidden: false,
            title: 'Washington, D.C.',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-99.636270, 18.853303],
                zoom: 8.9,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                }
            ]
        },
        {
            id: 'identificador-4',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.268679, 18.698405],
                zoom: 17.35,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identificador-5',
            alignment: 'left',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-100.268800, 18.698166],
                zoom: 17.5,
                pitch: 42.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'MunicipiosEdomex',
                opacity: 1
            },
            {
                layer: 'FMMunicipios2020',
                opacity: 0
            },
            {
                layer: 'FMMunicipios2024',
                opacity: 0
            },
            {
                layer: 'ranchos-opb',
                opacity: 0
            },
            {
                layer: 'bases-halconeo-2020',
                opacity: 0
            },
            {
                layer: 'rancho-las-piuelas-p',
                opacity: 0
            },
            {
                layer: 'rancho-calpa-p',
                opacity: 1
            }
        ],
            onChapterExit: []
        },
        {
            id: 'identificador-6',
            alignment: 'right',
            hidden: false,
            title: 'Washington, D.C.',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-100.200080, 18.642349],
                zoom: 10.75,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 1
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 1
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                }
            ]
        },
        {
            id: 'identificador-7',
            alignment: 'right',
            hidden: false,
            title: 'Washington, D.C.',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-100.177821, 18.683741],
                zoom: 11.85,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 1
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 0
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 1
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                }
            ]
        },
        {
            id: 'identificador-8',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.268679, 18.698405],
                zoom: 17.35,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identificador-9',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.321193, 18.783406],
                zoom: 10.75,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identificador-10',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.159645, 18.883581],
                zoom: 13.25,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                },
                {
                    layer: 'ataque-sep-2020',
                    opacity:1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identificador-11',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.142010, 18.880194],
                zoom: 17.5,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                },
                {
                    layer: 'ataque-sep-2020',
                    opacity:1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identificador-12',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.150577, 18.949680],
                zoom: 11.0,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                },
                {
                    layer: 'ataque-sep-2020',
                    opacity:1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identificador-13',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.094293, 18.966978],
                zoom: 14.6,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                },
                {
                    layer: 'ataque-sep-2020',
                    opacity:1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identificador-14',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.050796, 19.015853],
                zoom: 14.65,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                },
                {
                    layer: 'ataque-sep-2020',
                    opacity:1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identificador-15',
            alignment: 'center',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-100.257873, 18.679871],
                zoom: 10.25,
                pitch: 0.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'MunicipiosEdomex',
                    opacity: 1
                },
                {
                    layer: 'FMMunicipios2020',
                    opacity: 0
                },
                {
                    layer: 'FMMunicipios2024',
                    opacity: 0
                },
                {
                    layer: 'ranchos-opb',
                    opacity: 1
                },
                {
                    layer: 'bases-halconeo-2020',
                    opacity: 0
                },
                {
                    layer: 'rancho-las-piuelas-p',
                    opacity: 0
                },
                {
                    layer: 'rancho-calpa-p',
                    opacity: 1
                },
                {
                    layer: 'ataque-sep-2020',
                    opacity:1
                }
            ],
            onChapterExit: []
        }
    ]
};
