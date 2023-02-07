
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import { useCallback } from "react";

const images = {
    jollyroger: "data:image/png;base64,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",
    zoro: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfebMNzI0kOmoYNrZFqy724Vx2kAgTN2i8L7QP70vWl3uRUUysf9NnH_DAWTmfPycN0kw&usqp=CAU",
    law: "https://e7.pngegg.com/pngimages/493/929/png-clipart-trafargal-law-logo-trafalgar-d-water-law-monkey-d-luffy-t-shirt-one-piece-piracy-lambang-black-n-white-logo-smiley.png"
}

function Particle() {

    


    const optionsVar = {
        fullScreen: {
            zIndex: 0,
        },
        background: {
            color: {
                value: "#121212",
            },
        },
        // style: {
        //     position: 'absolute'
        // },
        fpsLimit: 120,
        interactivity: {
            events: {
                // onClick: {
                //     enable: true,
                //     mode: "push",
                // },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 8,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            // color: {
            //     value: "#ffffff",
            // },
            collisions: {
                enable: false,
            },
            move: {
                directions: "top",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: ["circle"],
                // "image": [
	            //     {
	            //         "src": images.jollyroger,
                //         // "height": 30,
	            //         // "width": 23
	            //     },
	            // //     // {
	            // //     //     "src": "../assets/Knicks-logo.png",
	            // //     //     "height":20,
	            // //     //     "width": 20
	            // //     // },
	            // //     // {
	            // //     //     "src": "../assets/attack-on-titan.png",
	            // //     //     "height": 20,
	            // //     //     "width": 20
	            // //     // }
	            // ]
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: false,
    }

    const particlesInit = useCallback(async main => {
        console.log(main);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
       await console.log(container);
    }, []);

return (
<Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsVar}
    />
)
}

export default Particle