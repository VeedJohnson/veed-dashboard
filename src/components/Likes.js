import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const likesVariants = {
    from: {
        opacity:0,
        scale:0
    },
    to: {
        opacity:1,
        scale:1,
        transition: { type:"tween", duration:.6}
    }
}

const Likes = () => {
    return ( 
        <motion.div className="likes-container"
        variants = { likesVariants }
        initial = 'from'
        animate = 'to'
        >
            <div className="likes" variants = { likesVariants }>
                <h1>Likes</h1>
                <div className="likes-wrapper">
                    <div className="likes-box">
                        <div className="likes-img lightGreen-color">
                            <img src={ require('../assets/img-7.png').default} alt="likes dashboard responsive" />
                        </div>
                        <div className="likes-text">
                            <h4>Bill Gates</h4>
                            <p>Bro we cashing out like crazy!!!</p>
                        </div>
                        <span><FontAwesomeIcon icon={ faHeart } /></span>
                        <h6>9hrs</h6>
                    </div>
                    <div className="likes-box">
                        <div className="likes-img">
                            <img src={ require('../assets/img-6.png').default} alt="likes dashboard responsive" />
                        </div>
                        <div className="likes-text">
                            <h4>Mark Zuckerberg</h4>
                            <p>Somebody tell Veed this $200million won't spend itself &#128514;</p>
                        </div>
                        <span><FontAwesomeIcon icon={ faHeart } /></span>
                        <h6>3d</h6>
                    </div>
                    <div className="likes-box">
                        <div className="likes-img lightPink-color">
                            <img src={ require('../assets/img-5.png').default} alt="likes dashboard responsive" />
                        </div>
                        <div className="likes-text">
                            <h4>Elon Musk</h4>
                            <p>Hahaha Veed is a fucking genius man! Taking him to the moon!</p>
                        </div>
                        <span><FontAwesomeIcon icon={ faHeart } /></span>
                        <h6>5d</h6>
                    </div>
                    <div className="likes-box">
                        <div className="likes-img Crimson-color">
                            <img src={ require('../assets/img-8.png').default} alt="likes dashboard responsive" />
                        </div>
                        <div className="likes-text">
                            <h4>Rihanna</h4>
                            <p>$23million!! &#128562; &#128562; &#128562; Flying to Lagos tomorrow to pay Veed a surprise!!!</p>
                        </div>
                        <span><FontAwesomeIcon icon={ faHeart } /></span>
                        <h6>1w</h6>
                    </div>
                </div>
            </div>
            <div className="likes-background" variants = { likesVariants }></div>
        </motion.div>
     );
}
 
export default Likes;