import { Head } from '@inertiajs/react';
import axios from 'axios';
import { JSX, useState } from 'react';

export default function Hello(): JSX.Element {
    const [inputValue, setInputVlaue] = useState('');
    // const [message, setMessage] = useState('Hello!');
    const [serverMessage, setServerMessage] = useState('Hello!');

    // フォーム送信時の処理
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // setMessage('こんにちは, ' + inputValue + 'さん！');
        axios
            .post('/update-message', { number: inputValue })
            .then((response) => {
                console.log(response);
                setServerMessage(response.data.message);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div style={{ padding: '20px' }}>
            <Head title="Hello" />
            <h1
                style={{
                    fontSize: '30px',
                    paddingBottom: '10px',
                }}
                className="pb-5 text-3xl"
            >
                {/* Hello Page */}
                welcome page
            </h1>
            <p
                style={{
                    fontSize: '20px',
                }}
            >
                {serverMessage}
            </p>
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputVlaue(e.target.value)}
                    placeholder="名前を入力"
                    style={{ padding: '8px', fontSize: '16px', width: '300px' }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '8px 16px',
                        marginLeft: '10px',
                        background: 'blue',
                        color: 'white',
                    }}
                >
                    送信
                </button>
            </form>
        </div>
    );
}
