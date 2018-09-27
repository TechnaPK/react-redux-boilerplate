import React from 'react'
import QRCode from 'qrcode.react'

const MobileOnly = props => {

    const year = new Date().getFullYear();
    
    return <React.Fragment>
        <header>
            <nav className="purple"></nav>
        </header>
        <main className="center-align padding25">
            <div className="container" style={{ maxWidth: 800 }}>
                <h5 className="marginBottom">Browser version currently under development</h5>
                <QRCode className="marginTop marginBottom" value={window.location.hostname} size={160} />
                <h5 className="marginTop">Please scan the QR CODE from your internet ready smartphone or visit <strong className="purple-text">{window.location.hostname}</strong> from your mobile.</h5>
            </div>
        </main>
        <footer>
            <div className="container">
                <p className="center-align">&copy; {year} Bech De. All rights Reserved.</p>
            </div>
        </footer>
    </React.Fragment>

}

export default MobileOnly