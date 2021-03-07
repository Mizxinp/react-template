/* eslint-disable no-undef */
import { parse, stringify } from 'qs'

const BASE_PATH = '/edu/'

export { stringify }

export function parseQueryParam(search) {
    const query = {}
    if (search) {
        search
            .slice(1)
            .split('&')
            .forEach((item) => {
                const [key, value] = item.split('=')
                query[key] = decodeURIComponent(value)
            })
    }
    return query
}

export function getQueryParam(paramName) {
    const params = parseQueryParam(window.location.search)
    return params[paramName]
}

export function downloadLinkFile(url, fileName = '') {
    const link = document.createElement('a')
    link.download = fileName
    link.style.display = 'none'
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    window.URL.revokeObjectURL(link.href)
    document.body.removeChild(link)
}

export function downloadBlob(blob, fileName) {
    const url = window.URL.createObjectURL(blob)
    downloadLinkFile(url, fileName)
    window.URL.revokeObjectURL(url)
}

/* eslint no-useless-escape:0 */
// eslint-disable-next-line max-len
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/

export function isUrl(path) {
    return reg.test(path)
}

export function urlToList(url) {
    const urlList = url.split('/').filter(i => i)
    return urlList.map((urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`)
}

/**
 * @param {Object} query
 */
export const addQuery = (query) => {
    const preQuery = parse(window.location.search, { ignoreQueryPrefix: true })
    const pathname = window.location.pathname.replace(BASE_PATH, '/')
    return pathname + stringify({ ...preQuery, ...query }, { addQueryPrefix: true })
}
/**
 * @param {string} search '' || '?d=111'
 * @param {Object} query {a:1}
 * @returns location.search string: ?a=1
 */
export const addSearchQuery = (search, query) => {
    const preQuery = parse(search, { ignoreQueryPrefix: true })
    return stringify({ ...preQuery, ...query }, { addQueryPrefix: true })
}

/**
 * @param {String} queryName
 */
export const removeQuery = (queryName) => {
    const preQuery = parse(window.location.search, { ignoreQueryPrefix: true })
    delete preQuery[queryName]
    const pathname = window.location.pathname.replace(BASE_PATH, '/')
    return pathname + stringify(preQuery, { addQueryPrefix: true })
}

/**
 * 判断两个uri的 search 内容是否一致
 */
export const searchIsEqual = (search1, search2) => {
    if (!search1 && !search2) return true
    const s1 = (search1 || '').match(/\?(.*)/) || []
    const s2 = (search2 || '').match(/\?(.*)/) || []
    return s1[1] === s2[1]
}

/**
 * 拼接查询参数为搜索字符串
 * @param {object} param - 查询参数
 */
export function paramToString(param) {
    let str = ''
    if (typeof param === 'object') {
        str = Object.entries(param)
            .filter(ele => ele[1] !== undefined && ele[1] !== null)
            .map(ele => (Array.isArray(ele[1])
                ? ele[1].map(value => `${ele[0]}=${value}`).join('&')
                : `${ele[0]}=${ele[1]}`))
            .filter(part => !!part)
            .join('&')
    }
    return str
}

export function toParameterList(params) {
    if (!params) {
        return []
    }
    return Object.keys(params).map(key => {
        if (Array.isArray(params[key])) {
            return {
                key,
                value: params[key],
            }
        }
        return {
            key,
            value: [params[key]],
        }
    })
}
