import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../../utils/auth';
import Header from '../../components/header/Header';
import chart from '../../images/chart.jpeg';

export default function Chart() {

    const history = useHistory();
    useEffect(() => {
        auth.loggedIn() || history.push('/login')
    }, [history]);

    return (
        <div>
            <Header />
            <div className="h-full md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            >
                <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-10 lg:opacity-75 inset-0 z-0"></div>
                <div className="w-full  max-w-md z-10">
                    <br />
                    <div className="poppins text-center text-white">
                        <img src={chart} className="rounded-3xl" />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Sun in Virgo
                        </h1>
                        <h4 className="text-sm">
                            The sun determines your ego, identity, and "role" in life. It's the core of who you are, and is the sign you're most likely to already know. Your Sun is in Virgo, meaning you are particularly smart, responsible, hard-working, and self-sacrificing. You're thorough, meticulous, and intentional in everything you do—you can accomplish things that most people can't, but may also get bogged down by the details of your day-to-day. You have a need to be wholesome.
                            It's in your eighth house, meaning you feel the need to distinguish yourself from others through darkness, taboos, rebirth, sex, and transformation.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Moon in Gemini
                        </h1>
                        <h4 className="text-sm">
                            The moon rules your emotions, moods, and feelings. This is likely the sign you most think of yourself as, since it reflects your personality when you're alone or deeply comfortable. Your Moon is in Gemini, meaning your emotional self is often restless and unsettled. You're extremely adaptable, which sometimes makes you feel pulled in too many directions. You are easily bored and need to feel like you are free to be creative and create meaning, which can make you feel like you're in a constant identity crisis.
                            It's in your fifth house, meaning you find security and safety through romance, self-expression, creativity, and pleasure.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Ascendant in Aquarius
                        </h1>
                        <h4 className="text-sm">
                            Your ascendant is the "mask" you present to people. It can be seen in your personal style and how you come off to people when you first meet. Some say it becomes less relevant as you get older. It changes every two hours, so if it doesn't make sense, text your mom to confirm your birth time. Your Ascendant is in Aquarius, meaning you come across as broadminded, intellectual, and prone to abstraction, though somewhat detached or abrupt in your dealings with the real world. Your unconventional interests may seem eccentric or pretentious to others.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Mercury in Virgo
                        </h1>
                        <h4 className="text-sm">
                            Mercury determines how you communicate, talk, think, and process information. It also indicates how you learn. It is the mind's planet. Your Mercury is in Virgo, meaning your intellect is analytical, precise, and diligent. Your unbiased sense of logic can make you seem a bit clinical—you have a tendency to be nitpicky and point out what's wrong rather than what's right. You're a planner and pay attention to the details.
                            It's in your eighth house, meaning you are curious about and inclined to analyze death, sex, the truth, and how to trust.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Venus in Libra
                        </h1>
                        <h4 className="text-sm">
                            Venus determines how and what you love. It indicates how you express affection and the qualities you're attracted to. Your Venus is in Libra, meaning your romantic side is idealistic and eager-to-please. You want an equitable relationship, and you're willing to make compromises to get there. You can be a little self-obsessed, and may have trouble being realistic or loyal in your relationships.
                            It's in your ninth house, meaning that for you, love is often expressed in philosophy, faith, education, and politics.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Mars in Cancer
                        </h1>
                        <h4 className="text-sm">
                            Mars is the planet of aggression. It determines how you assert yourself, take action, and the energy that surrounds you—particularly in your sex life, your ambitiousness, and when you're angry. Your Mars is in Cancer, meaning you assert yourself in a way that is emotional and somewhat passive-aggressive, and you push things forward only when you feel safe and secure.
                            It's in your fifth house, meaning you put a lot of energy into romance, self-expression, creativity, and pleasure.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Jupiter in Virgo
                        </h1>
                        <h4 className="text-sm">
                            One of the two social planets, Jupiter rules idealism, optimism, and expansion. It's also very philosophical. Your Jupiter is in Virgo, meaning you grow and find understanding through careful thought, goal-setting, and hard work.
                            It's in your eighth house, meaning you find success through sexuality and transformation.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Saturn in Aquarius
                        </h1>
                        <h4 className="text-sm">
                            The other social planet, Saturn rules responsibility, restrictions, limits, boundaries, fears, and self-discipline. Your Saturn is in Aquarius, meaning you struggle with obstinacy, a superiority complex, and being overly detached.
                            It's in your first house, meaning you have had difficulties with your self and self-image—and, because it's your first house, your Saturn in Aquarius is hyper-present in your personality.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Uranus in Capricorn
                        </h1>
                        <h4 className="text-sm">
                            Uranus stays in each sign for seven years, meaning it rules a generation more than a person. It rules innovation, rebellion, and progress. Your Uranus is in Capricorn, meaning other generations are shocked by your generation's sense of responsibility, seriousness, rationality, and hunger for power.
                            It's in your twelfth house, meaning that for you, this manifests in rebelling against dated expectations about privacy, secrets, and introspection.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Neptune in Capricorn
                        </h1>
                        <h4 className="text-sm">
                            Neptune stays in each sign for around fourteen years, meaning it rules a generation more than a person. It rules dreams, imagination, and the unconscious. Your Neptune is in Capricorn, meaning your entire generation finds inspiration through hard work, responsibility, seriousness, and ambition.
                            It's in your twelfth house, meaning that for you, this manifests in your ideal—verging on unrealistic and impractical—about privacy, secrets, and introspection.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Pluto in Scorpio
                        </h1>
                        <h4 className="text-sm">
                            Pluto stays in each sign for up to thirty years, meaning it rules a generation more than a person. It rules power, intensity, obsession, and control. Your Pluto is in Scorpio, meaning your generation's psyche is comparatively passionate, intense, serious, private, self-obsessed, and perceptive.
                            It's in your tenth house, meaning you personally are transforming outdated definitions of success and responsibility.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <Link key="Home" to="/">
                            <h3 className="pMono text-base font-bold underline">
                                RETURN TO HOME
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
