import React, { Component } from 'react';
import  './index.css'
class index extends Component {
    render() {
        return (
            <div className="App">
                {/* 粽子外形 */}
                <div className="zongzi">
                    <div className="round1"></div>
                    <div className="round2"></div>
                    <div className="round3"></div>
                </div>

                {/* 粽叶 */}
                <div className="ruoye">
                    <div className="ruoye-left">
                        <div className="line1 line1-bg"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                        <div className="line4"></div>
                    </div>

                    <div className="ruoye-right">
                        <div className="line1 line1-bg"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                        <div className="line4"></div>
                    </div>
                </div>

                {/* 眼睛 */}
                <div className="eye"></div>
                <div className="eye eye-right"></div>
                {/* 腮红 */}
                <div className="shy">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className="shy shy-right">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {/* 嘴巴 */}
                <div className="mouth">
                    <div className="round"></div>
                </div>

                {/* 手 */}
                <div className="hand hand-left">
                    <div className="round"></div>
                </div>
                <div className="hand hand-right">
                    <div className="round"></div>
                </div>
                {/* 脚 */}
                <div className="leg leg-left"></div>
                <div className="leg leg-right"></div>

                {/* 阴影 */}
                <div className="z-shadow"></div>

                {/* 心 */}
                <div className="i-heart i-heart-pos1">
                    <div className="i-heart-l"></div>
                    <div className="i-heart-r"></div>
                    <div className="mask"></div>
                </div>
                <div className="i-heart i-heart-pos2">
                    <div className="i-heart-l"></div>
                    <div className="i-heart-r"></div>
                    <div className="mask"></div>
                </div>
                <div className="i-heart i-heart-pos3">
                    <div className="i-heart-l"></div>
                    <div className="i-heart-r"></div>
                    <div className="mask"></div>
                </div>
                <div className="i-heart i-heart-pos4">
                    <div className="i-heart-l"></div>
                    <div className="i-heart-r"></div>
                    <div className="mask"></div>
                </div>
                <div className="i-heart i-heart-pos5">
                    <div className="i-heart-l"></div>
                    <div className="i-heart-r"></div>
                    <div className="mask"></div>
                </div>
            </div>
        );
    }
}

export default index;
