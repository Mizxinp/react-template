import React from 'react'
import { Button } from 'antd'
import { Toast, Icon } from 'elephant-ui'
import { connect } from 'dva'
import styles from './TestPage.scss'

function TestPage(props) {
    console.log('props', props)
    return (
        <div className={styles.container}>
            TestPage12
            <Button style={{ marginRight: 20 }} type="primary" onClick={() => props.history.push('/test/2')}>点击</Button>
            <Button type="primary" onClick={() => Toast.info('hhahah')}>elephant toast</Button>
            <div>
                <Icon name="iconright" size={16} />
            </div>
            <div className={styles.flexTest}>flex</div>
            <i className="iconfont iconright" />
        </div>
    )
}

export default connect(({ test }) => ({ test }))(TestPage)
