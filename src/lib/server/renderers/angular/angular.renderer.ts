import type { RawDataType } from '../../interfaces/raw-data.interface';
import { mkdir, writeFile, cp } from 'node:fs/promises';
import { getLanguageRow } from '../../helpers/xlsx.helper';
import { getLanguageLiteralList } from './angular.helper';

export async function generateAngular(data: RawDataType[], path: string) {
	await mkdir(path);
	const languageRow = getLanguageRow(data[0]);

	await Promise.all(
		languageRow.map(async (language) => {
			const literals = getLanguageLiteralList(language, data.slice(1));
			const languageCode = language.code.split('-')[0];

			await writeFile(`${path}/${languageCode}.json`, JSON.stringify(literals, null, 2));
		})
	);
}
