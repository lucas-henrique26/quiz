import styles from '../styles/Temporizador.module.css'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: number
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={100}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#88e926', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>    
        </div>
    )
}