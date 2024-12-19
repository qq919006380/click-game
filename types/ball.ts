export interface Ball {
  id: string;
  type: 'normal' | 'gold' | 'rainbow' | 'black' | 'lightning';
  points: number;
  color: string;
  size: number;
  label: string;
}

export const BALL_TYPES: Record<Ball['type'], Omit<Ball, 'id'>> = {
    normal: {
        type: 'normal',
        points: 1,
        color: '#ff2e9f', // 霓虹粉
        size: 60,
        label: '普通球'
      },
      gold: {
        type: 'gold',
        points: 5,
        color: '#2de2e6', // 霓虹蓝
        size: 70,
        label: '金球'
      },
      rainbow: {
        type: 'rainbow',
        points: 10,
        color: '#9f2cf9', // 霓虹紫
        size: 80,
        label: '彩虹球'
      },
      black: {
        type: 'black',
        points: -2,
        color: '#ff0055', // 深粉
        size: 65,
        label: '黑洞球'
      },
      lightning: {
        type: 'lightning',
        points: 20,
        color: '#00fff9', // 青色
        size: 75,
        label: '闪电球'
      }
}; 