import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './level.css'
import Header from '../components/header.js'

class Level extends Component {

    move = () => {
        document.location.href = "/level_content"
    }

    render() {
        return (
            <div>
                <Header />

                <div className="connection-wrap">
                    <div className="level_explain">
                        <b>Level</b>
                        <br></br><br></br>
                        자신의 보안 레벨을 확인해보세요.
                    </div>

                    <div className="level" id="1" onClick={this.move}>
                        <div className="level_name">LEVEL 1</div>
                        <br></br>
                        <div className="level_detail">(분석/설계) 웹 서비스 요청 및 결과 검증, (구현)크로스 사이트 스크립팅 취약점 </div>
                    </div>
                    <hr></hr>

                    <div className="level" id="2" onClick={this.move}>
                        <div className="level_name">LEVEL 2</div>
                        <br></br>
                        <div className="level_detail">(분석/설계) 웹 서비스 요청 및 결과 검증, DBMS 조회 및 결과 검증, XML 조회 및 결과 검증
                        <br></br>(구현)크로스 사이트 스크립팅 취약점, SQL INJECTION </div>
                    </div>
                    <hr></hr>

                    <div className="level" id="3" onClick={this.move}>
                        <div className="level_name">LEVEL 3</div>
                        <br></br>
                        <div className="level_detail">(분석/설계) 웹 서비스 요청 및 결과 검증, DBMS 조회 및 결과 검증, XML 조회 및 결과 검증, 시스템 자원 접근 및 명령어 수행 입력값 검증,
                        <br></br>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP프로토콜 유효성 검증, 업로드/다운로드 파일 검증</div>

                            (구현)크로스 사이트 스크립팅 취약점, SQL INJECTION, 취약점 인증, 취약한 접근 제어, 보안 설정 오류, 민감 데이터 노출 </div>
                    </div>
                </div >
            </div >
        )
    }

}

export default Level;