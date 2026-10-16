
import db from '../db.js';
import path from 'path';

// realtivePath = path.join(__dirname)

export async function listroll_home() {
    const query = `SELECT
            id,
            link,
            imgsrc AS "imgSrc",
            alttext AS "altText",
            title,
            description
        FROM listroll_home
        ORDER BY id;`
        ;

        const LRH_result = await db.query(query);

        return LRH_result.rows;
}

export async function listroll_shop() {
    return;
}
