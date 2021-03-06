import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../../utils/auth';

import Header from '../../components/header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowUp, faMercury, faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faMeh, faFrown, } from '@fortawesome/free-regular-svg-icons';

import chandler from '../../images/chandler.png';

export default function Chandler() {

    const history = useHistory();
    /// check if there is a token in local storage
    // if no redirect the user to login page
    useEffect(() => {
        auth.loggedIn() || history.push('/login')

    }, [history]);

    return (
        <div>
            <Header />
            <div className="h-full md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            >
                <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-10 lg:opacity-75 inset-0 z-0"></div>
                <div className="w-full z-10">
                    <br />
                    <div className="poppins text-right text-white">
                        <div className="flex flex-auto md:ml-32">
                            <img src={chandler} className="rounded-full h-16 md:h-24 w-16 md:w-24 m-2" />
                            <div>
                                <h1 className="pMono text-2xl font-bold md:mt-8">
                                    Chandler Bing<span className="text-xs"> @mrscbong</span>
                                </h1>
                                <p className="text-sm md:text-base"> <FontAwesomeIcon icon={faSun} /> Gemini <FontAwesomeIcon icon={faMoon} /> Leo <FontAwesomeIcon icon={faArrowUp} /> Aquarius</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="text-left md:text-right">
                            <h3 className="pMono text-2xl font-bold">
                                TODAY <span className="poppins text-sm font-normal">September 8</span>
                            </h3>
                        </div>
                        <br />
                        <br />
                        <br />
                        <p className="text-base border-0 border-t border-white border-opacity-25 p-4">
                            <div className="md:ml-60">
                                Bridget, you feel a pull towards servitude, and Chandler likes to be playful. They are not in a hurry right now, so you can take your time. Being present can be a gift. Show up as your true self, ready to engage. Listen to the inflections in their voice.
                            </div>
                        </p>
                        <br />
                        <br />
                        <br />
                        <div className="pMono font-bold">
                            <h1 className="text-2xl text-left border-0 border-t border-white border-opacity-25 py-4">
                                Compatibility
                            </h1>
                            <div className="grid grid-cols-6 grid-rows-5 gap-y-3 text-left md:w-1/3">
                                <div className="bg-white text-black row-span-5 w-6 text-center">
                                    <FontAwesomeIcon icon={faSmile} />
                                </div>
                                <FontAwesomeIcon icon={faMoon} />
                                <div className="col-span-4">
                                    <h4>
                                        MOODS & EMOTIONS
                                    </h4>
                                    <h4 className="poppins font-light">
                                        Leo ??? Gemini
                                    </h4>
                                </div>
                                <FontAwesomeIcon icon={faMercury} />
                                <div className="col-span-4">
                                    <h4>
                                        INTELLECT & COMMUNICATION
                                    </h4>
                                    <h4 className="poppins font-light">
                                        Cancer ??? Virgo
                                    </h4>
                                </div>
                                <FontAwesomeIcon icon={faVenus} />
                                <div className="col-span-4">
                                    <h4>
                                        LOVE & PLEASURE
                                    </h4>
                                    <h4 className="poppins font-light">
                                        Gemini ??? Libra
                                    </h4>
                                </div>
                                <FontAwesomeIcon icon={faMars} />
                                <div className="col-span-4">
                                    <h4>
                                        SEX & AGGRESSION
                                    </h4>
                                    <h4 className="poppins font-light">
                                        Virgo ??? Cancer
                                    </h4>
                                </div>
                                <p>???</p>
                                <div className="col-span-4">
                                    <h4>
                                        PHILOSOPHIES OF LIFE
                                    </h4>
                                    <h4 className="poppins font-light">
                                        Virgo ??? Virgo
                                    </h4>
                                </div>
                            </div>
                            <br />
                            <div className="grid grid-cols-6 grid-rows-1 text-left md:w-1/3">
                                <div className="bg-gray-400 text-black w-6 text-center">
                                    <FontAwesomeIcon icon={faMeh} />
                                </div>
                                <p>???</p>
                                <div className="col-span-4">
                                    <h4>
                                        SENSES OF RESPONSIBILITY
                                    </h4>
                                    <h4 className="poppins font-light">
                                        Leo ??? Gemini
                                    </h4>
                                </div>
                            </div>
                            <br />
                            <div className="grid grid-cols-6 grid-rows-1 text-left md:w-1/3">
                                <div className="bg-black text-white w-6 text-center">
                                    <FontAwesomeIcon icon={faFrown} />
                                </div>
                                <FontAwesomeIcon icon={faSun} />
                                <div className="col-span-4">
                                    <h4>
                                        BASIC IDENTITIES
                                    </h4>
                                    <h4 className="poppins font-light">
                                        Gemini ??? Virgo
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="border border-dotted border-white border-opacity-25 p-4 rounded-xl bg-black m-1 md:m-4">
                            <FontAwesomeIcon icon={faSun} className="text-2xl" />
                            <h1 className="pMono text-xl font-bold">
                                SUN
                            </h1>
                            <h3 className="pMono font-bold">
                                YOU: VIRGO
                            </h3>
                            <h3 className="pMono font-bold">
                                THEM: GEMINI
                            </h3>
                            <br />
                            <p>
                                The sun determines your ego, identity, and "role" in life. It's the core of who you are, and is the sign you're most likely to already know.
                            </p>
                            <br />
                            <p>
                                Your Sun is in Virgo, meaning you are particularly smart, responsible, hard-working, and self-sacrificing. You're thorough, meticulous, and intentional in everything you do???you can accomplish things that most people can't, but may also get bogged down by the details of your day-to-day. You have a need to be wholesome. Their Sun is in Gemini, meaning they are fundamentally dynamic, quick-witted, eclectic, and curious. Fascinated by everything, their childlike energy is often scattered in a million directions. On a social level, this may come off as gossipy or flaky.
                            </p>
                            <br />
                            <p>
                                This can be a difficult pairing. Gemini and Virgo are both ruled by the planet Mercury, which is one of the only things that you two have in common. Between their youthful playfulness and your critical nature, your relationship runs the risk of reproducing a parent-child dynamic. Neither of you are particularly decisive, so there's a potential for a lot of talk with no action. The only chance for a useful connection relies on the possibility to bond over your shared rational intellects. They could help you loosen up and you could help them learn to infuse their impulses with the power of endurance.
                            </p>
                        </div>
                        <div className="border border-dotted border-white border-opacity-25 p-4 rounded-xl bg-white text-black m-1 md:m-4">
                            <FontAwesomeIcon icon={faMoon} className="text-2xl" />
                            <h1 className="pMono text-xl font-bold">
                                MOON
                            </h1>
                            <h3 className="pMono font-bold">
                                YOU: GEMINI
                            </h3>
                            <h3 className="pMono font-bold">
                                THEM: LEO
                            </h3>
                            <br />
                            <p>
                                The moon rules your emotions, moods, and feelings. This is likely the sign you most think of yourself as, since it reflects your personality when you're alone or deeply comfortable.
                            </p>
                            <br />
                            <p>
                                Your Moon is in Gemini, meaning your emotional self is often restless and unsettled. You're extremely adaptable, which sometimes makes you feel pulled in too many directions. You are easily bored and need to feel like you are free to be creative and create meaning, which can make you feel like you're in a constant identity crisis.  Their Moon is in Leo, meaning their emotional self is dramatic, proud, expressive, idealistic, and somewhat self-centered. They need a lot of love, care, and validation from other people.
                            </p>
                            <br />
                            <p>
                                You can instinctively empathize with each other's moods and feelings.
                            </p>
                        </div>
                        <div className="border border-dotted border-white border-opacity-25 p-4 rounded-xl bg-white text-black m-1 md:m-4">
                            <FontAwesomeIcon icon={faMercury} className="text-2xl" />
                            <h1 className="pMono text-xl font-bold">
                                MERCURY
                            </h1>
                            <h3 className="pMono font-bold">
                                YOU: VIRGO
                            </h3>
                            <h3 className="pMono font-bold">
                                THEM: CANCER
                            </h3>
                            <br />
                            <p>
                                Mercury determines how you communicate, talk, think, and process information. It also indicates how you learn. It is the mind's planet.
                            </p>
                            <br />
                            <p>
                                Your Mercury is in Virgo, meaning your intellect is analytical, precise, and diligent. Your unbiased sense of logic can make you seem a bit clinical???you have a tendency to be nitpicky and point out what's wrong rather than what's right. You're a planner and pay attention to the details.  Their Mercury is in Cancer, meaning their intellect is emotional and empathetic. They have a strong intuition and a skill for diplomacy, but they may instead favor volatility and irrationality. Sighing is a favored mode of communication.
                            </p>
                            <br />
                            <p>
                                You communicate and think in similar ways.
                            </p>
                        </div>
                        <div className="border border-dotted border-white border-opacity-25 p-4 rounded-xl bg-white text-black m-1 md:m-4">
                            <FontAwesomeIcon icon={faVenus} className="text-2xl" />
                            <h1 className="pMono text-xl font-bold">
                                VENUS
                            </h1>
                            <h3 className="pMono font-bold">
                                YOU: LIBRA
                            </h3>
                            <h3 className="pMono font-bold">
                                THEM: GEMINI
                            </h3>
                            <br />
                            <p>
                                Mercury determines how you communicate, talk, think, and process information. It also indicates how you learn. It is the mind's planet.
                            </p>
                            <br />
                            <p>
                                Your Mercury is in Virgo, meaning your intellect is analytical, precise, and diligent. Your unbiased sense of logic can make you seem a bit clinical???you have a tendency to be nitpicky and point out what's wrong rather than what's right. You're a planner and pay attention to the details.  Their Mercury is in Cancer, meaning their intellect is emotional and empathetic. They have a strong intuition and a skill for diplomacy, but they may instead favor volatility and irrationality. Sighing is a favored mode of communication.
                            </p>
                            <br />
                            <p>
                                You communicate and think in similar ways.
                            </p>
                        </div>
                        <div className="border border-dotted border-white border-opacity-25 p-4 rounded-xl bg-white text-black m-1 md:m-4">
                            <FontAwesomeIcon icon={faMars} className="text-2xl" />
                            <h1 className="pMono text-xl font-bold">
                                MARS
                            </h1>
                            <h3 className="pMono font-bold">
                                YOU: CANCER
                            </h3>
                            <h3 className="pMono font-bold">
                                THEM: VIRGO
                            </h3>
                            <br />
                            <p>
                                Mars is the planet of aggression. It determines how you assert yourself, take action, and the energy that surrounds you???particularly in your sex life, your ambitiousness, and when you're angry.
                            </p>
                            <br />
                            <p>
                                Your Mars is in Cancer, meaning you assert yourself in a way that is emotional and somewhat passive-aggressive, and you push things forward only when you feel safe and secure.  Their Mars is in Virgo, meaning they assert themselves in a way that is precise, and they push things forward with diligence, intention, and hard work. They're rarely willing to go out on a limb ??? their tendency to be intentional and analytical means they need to know that the situation is right before they act.
                            </p>
                            <br />
                            <p>
                                Your passion and sexuality are extremely compatible.???
                            </p>
                        </div>
                        <div className="border border-dotted border-white border-opacity-25 p-4 rounded-xl bg-white text-black m-1 md:m-4">
                            <h1>???</h1>
                            <h1 className="pMono text-xl font-bold">
                                JUPITER
                            </h1>
                            <h3 className="pMono font-bold">
                                YOU: VIRGO
                            </h3>
                            <h3 className="pMono font-bold">
                                THEM: VIRGO
                            </h3>
                            <br />
                            <p>
                                One of the two social planets, Jupiter rules idealism, optimism, and expansion. It's also very philosophical.
                            </p>
                            <br />
                            <p>
                                You both have Jupiter in Virgo, meaning you both grow and find understanding through careful thought, goal-setting, and hard work.
                            </p>
                            <br />
                            <p>
                                The ways you grow and dream are aligned and make intuitive sense to each other.
                            </p>
                        </div>
                        <div className="border border-dotted border-white border-opacity-25 p-4 rounded-xl bg-gray-400 text-black m-1 md:m-4">
                            <h1>???</h1>
                            <h1 className="pMono text-xl font-bold">
                                SATURN
                            </h1>
                            <h3 className="pMono font-bold">
                                YOU: AQUARIUS
                            </h3>
                            <h3 className="pMono font-bold">
                                THEM: VIRGO
                            </h3>
                            <br />
                            <p>
                                The other social planet, Saturn rules responsibility, restrictions, limits, boundaries, fears, and self-discipline.
                            </p>
                            <br />
                            <p>
                                Your Saturn is in Aquarius, meaning you struggle with obstinacy, a superiority complex, and being overly detached. Their Saturn is in Virgo, meaning they struggle with perfectionism, a critical eye, workaholic tendencies, and their need to be pure.
                            </p>
                            <br />
                            <p>
                                Your struggles are fairly different, but with empathy, you can help each other grow.
                            </p>
                        </div>

                        <Link key="Home" to="/">
                            <h3 className="pMono text-base font-bold underline">
                                BACK TO HOME
                            </h3>
                        </Link>
                    </div>
                </div>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
