/**
 * Author  : GreazyMcSC
 * Package : GreazyCracker | Reverse Engineering Toolkit AIO
 * Version : 1.5.x
 * Link    : https://github.com/GreazyMcSC/GreazyCracker
 * license : MIT
 */

import React, { useState, useEffect } from 'react';
import {
  MDBModal as Modal,
  MDBModalDialog as Dialog,
  MDBModalContent as Content,
  MDBModalHeader as Header,
  MDBModalBody as Body,
  MDBModalFooter as Footer,
  MDBBtn as Btn,
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col
} from 'mdb-react-ui-kit';

const Notice = () => {

  const [isOpened, setModalStatus] = useState(false);
  const openModal = () => setModalStatus(true);
  const closeModal = () => setModalStatus(false);

  useEffect(() => {
    window.electron.on('open-notice', openModal);
    return () => {
      window.electron.off('open-notice', openModal);
    };
  }, []);

  return (
    <>
      <Modal open={isOpened} setOpen={setModalStatus} className="notice-modal" tabIndex="-1" staticBackdrop >
        <Dialog centered>
          <Content>
            <Header>
              <div className="text-center w-100">
                <h1>DISCLAIMER</h1>
                <p className="muted">Please read this important notice carefully before using GreazyCracker.</p>
              </div>
            </Header>
            <Body>
              <Container className="">
                <Row>
                  <Col>
                    <div className="app-scroller">
                      <h2>What is GreazyCracker?</h2>
                      <p>
                        GreazyCracker is a Windows-based and AI-powered Reverse Engineering Toolkit "All-In-One", built for security purposes (malware analysis, penetration testing)
                        and educational use only. It serves as a comprehensive package manager for reverse engineering tools.
                      </p>

                      <div className="separator" aria-hidden="true"></div>

                      <h2>Legal &amp; Ethical Notice</h2>
                      <p>
                        Respecting the rights of software developers is paramount. Engaging in activities such as bypassing software protections or reverse
                        engineering software without explicit permission is not only generally illegal, but also unethical. It's essential to utilize software
                        in the manner intended by its creators and in compliance with the stipulated terms of service or license agreement.
                      </p>

                      <p>By using GreazyCracker, you agree to use this toolkit solely for:</p>
                      <ul>
                        <li>Authorized security research and penetration testing</li>
                        <li>Malware analysis in controlled environments</li>
                        <li>Educational and learning purposes</li>
                        <li>Legal reverse engineering activities with proper authorization</li>
                      </ul>

                      <p className="muted">Any misuse of this toolkit for illegal activities is strictly prohibited and solely the responsibility of the user.</p>

                      <div className="separator" aria-hidden="true"></div>

                      <h2>Important Security Warnings</h2>

                      <div className="notice">
                        <p><strong>⚠ ANTIVIRUS DETECTION:</strong> Reverse engineering tools are often flagged by antivirus software due to their use of binary patching algorithms,
                          debugging techniques, packing/unpacking, and other operations that can resemble malware behavior. This is expected and does not necessarily indicate
                          actual malicious content. That said a Malicious package with access to and understanding of this toolkit is a pig in shite</p>

                        <p><strong>⚠ RECOMMENDED USAGE ENVIRONMENT:</strong> It is strongly recommended to use GreazyCracker in a secure virtual machine or sandbox environment to ensure
                          system safety and proper isolation from your main operating system.</p>

                        <p><strong>⚠ TRUSTED SOURCES:</strong> GreazyCracker packages are manualy downloaded from online sources which can and do change hands. Users should always
                          exercise caution and verify the integrity of downloaded tools.</p>

                        <p><strong>⚠ PACKAGE SAFETY:</strong> Not all packages included in GreazyCracker are guaranteed to be safe. Some tools may contain experimental features,
                          aggressive behavior, or potentially unwanted modifications. Always use packages with caution, preferably in an isolated environment, and understand
                          what each tool does before executing it.</p>

                        <p className="muted"><strong>Note:</strong> File integrity check using token &amp; MD5 hashes is implemented primarily for antivirus detection avoidance
                          and does not ensure self-protection against malicious modifications. Always verify packages before using..</p>
                      </div>

                      <div className="separator" aria-hidden="true"></div>

                      <h2>Liability Disclaimer</h2>
                      <p>GreazyCracker is provided <strong>"AS IS"</strong> without warranty of any kind, either expressed or implied. The authors and contributors of GreazyCracker:</p>

                      <ul>
                        <li>Are <strong>NOT</strong> responsible for any misuse of this toolkit.</li>
                        <li>Are <strong>NOT</strong> liaclassNameble for any damages, legal issues, or consequences resulting from the use or misuse of this software.</li>
                        <li>Do <strong>NOT</strong> endorse or encourage any illegal activities.</li>
                        <li>Provide this tool for legitimate security research and education only.</li>
                      </ul>

                      <p>By downloading, installing, or using GreazyCracker, you acknowledge that you have read, understood, and agreed to this disclaimer. You accept full responsibility
                        for your actions and any consequences that may arise from using this toolkit.</p>

                      <div className="cta">
                        <span className="danger">— USE AT YOUR OWN RISK. DONT TRUST A HACKER!!!!  —</span>
                      </div>

                      <div className="separator" aria-hidden="true"></div>

                      <p className="muted">
                        Source: <a href="https://github.com/GreazyMcSC/GreazyCracker" className="page-link" target="_blank" rel="noopener noreferrer">GitHub — GreazyMcSC/GreazyCracker</a><br />
                        License: <a href="https://opensource.org/licenses/MIT" className="page-link" target="_blank" rel="noopener noreferrer">MIT License</a><br />
                        For issues, questions, or contributions, please visit the project's GitHub repository.
                      </p>

                    </div>
                  </Col>
                </Row>
              </Container>
            </Body>
            <Footer>
              <Btn color="primary" onClick={closeModal}>OK</Btn>
            </Footer>
          </Content>
        </Dialog>
      </Modal >
    </>
  );
};

export default Notice;
