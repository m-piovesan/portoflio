import type { Post } from "~/types";

export function createTimeline(_t: (key: string) => string): Post[] {
    return [
    {
        title: _t('bdayTitle'),
        description: _t('bdayDesc'),
        date: new Date('2003-11-12T10:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: _t('curitibaTitle'),
        description: _t('curitibaDesc'),
        date: new Date('2022-06-05T00:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: _t('ifcTitle'),
        description: _t('ifcDesc'),
        date: new Date('2019-02-27T00:00:00.000Z'),
        badge: 'Personal',
    },
    {
        title: _t('mindtechTitle'),
        description: _t('mindtechDesc'),
        date: new Date('2024-09-10T00:00:00.000Z'),
        image: "timeline/mind.jpeg",
        to: 'https://www.linkedin.com/posts/matheus-mpiovesan_pt-br-boa-noite-rede-fecho-esta-activity-7385090039875186688-cWSL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADUVanIBYZwx8c79yb7EwwwpYC2MlrxXFk8',
        badge: 'Professional',
        target: "_blank"
    },
    {
        title: _t('ufprTitle'),
        description: _t('ufprDesc'),
        date: new Date('2022-06-07T00:00:00.000Z'),
        badge: 'Academic',
    },
    {
        title: _t('icsTitle'),
        description: _t('icsDesc'),
        date: new Date('2023-03-02T00:00:00.000Z'),
        badge: 'Academic',
    },
    {
        title: _t('bellosoftTitle'),
        description: _t('bellosoftDesc'),
        date: new Date('2024-04-02T00:00:00.000Z'),
        badge: 'Professional',
    },
    {
        title: _t('unitedTitle'),
        description: _t('unitedDesc'),
        date: new Date('2021-04-17T00:00:00.000Z'),
        badge: 'Professional',
        image: "timeline/united.png",
    },
    {
        title: _t('gesTitle'),
        description: _t('gesDesc'),
        date: new Date('2025-10-21T00:00:00.000Z'),
        badge: 'Professional',
        image: "timeline/ges.png",
    },
    {
        title: _t('spotTitle'),
        description: _t('spotDesc'),
        date: new Date('2025-12-05T00:00:00.000Z'),
        badge: 'Hobbies',
        image: "timeline/spot.png",
        to: 'https://musicboard.app/piovesan',
        target: '_blank'
    }
]
}