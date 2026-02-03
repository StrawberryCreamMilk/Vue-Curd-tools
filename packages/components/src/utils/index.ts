// === 工具函数 ===

// 示例：格式化函数
export function formatDate(date: Date): string {
    // 格式化日期为 ISO 字符串
    return date.toISOString()
}

// 示例：验证函数
export function validate(value: any): boolean {
    // 实现
    return !!value
}