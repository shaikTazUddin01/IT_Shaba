import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 20px' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Top Section */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '20px',
                }}>
                    {/* Company Info */}
                    <div style={{ flex: '1 1 300px', marginBottom: '20px', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '10px' }}>Company Name</h3>
                        <p style={{ lineHeight: '1.6', margin: 0 }}>
                            Delivering exceptional services with a commitment to quality and customer satisfaction.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div style={{
                        flex: '1 1 200px',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}>
                        <h4 style={{ marginBottom: '10px' }}>Quick Links</h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            lineHeight: '2',
                        }}>
                            <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a></li>
                            <li><a href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
                            <li><a href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a></li>
                            <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div style={{ flex: '1 1 200px', marginBottom: '20px', textAlign: 'center' }}>
                        <h4 style={{ marginBottom: '10px' }}>Contact Us</h4>
                        <p style={{ margin: '0 0 10px' }}>123 Main St, Cityville, ST 56789</p>
                        <p style={{ margin: '0 0 10px' }}>Phone: (123) 456-7890</p>
                        <p style={{ margin: 0 }}>Email: info@example.com</p>
                    </div>
                </div>

                {/* Social Media */}
                <div style={{ textAlign: 'center', borderTop: '1px solid #444', paddingTop: '20px', width: '100%' }}>
                    <p style={{ marginBottom: '10px' }}>Follow Us</p>
                    <div style={{ display: 'inline-flex', gap: '15px' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '20px', textDecoration: 'none' }}>Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '20px', textDecoration: 'none' }}>Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '20px', textDecoration: 'none' }}>Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '20px', textDecoration: 'none' }}>LinkedIn</a>
                    </div>
                    <p style={{ marginTop: '10px', fontSize: '14px', color: '#aaa' }}>© 2025 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
