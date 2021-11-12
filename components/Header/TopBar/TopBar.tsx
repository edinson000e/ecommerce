
export default function TopBar(props) {
    return (
        <div className="top-bar">
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                <div syle={{ width: '100px' }}>
                    <Logo></Logo>
                </div>
                <div syle={{ width: '100px' }}>
                    <Seach />
                </div>
            </div>

        </div>
    )
}


function Logo() {
    return (
        <div> aca creamos una imagen</div>
    )
}

function Seach() {
    return (
        <div> aca creamos un search</div>
    )
}