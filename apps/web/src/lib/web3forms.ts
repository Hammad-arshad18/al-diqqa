import type { FormValues } from '@/hooks/use-form-submission';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

type Web3FormsOptions = {
	/** Shown as the email subject in your inbox. */
	subject: string;
};

const accessKey = () =>
	import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '92329cdb-4ba3-4889-acb9-7b57269434be';

const asString = (value: FormValues[string] | undefined): string => {
	if (typeof value === 'string') return value;
	if (Array.isArray(value)) return value.map(String).join(', ');
	if (value == null) return '';
	return String(value);
};

/**
 * Posts a contact or newsletter form to Web3Forms.
 * Throws on failure so `useFormSubmission` can show the error state.
 */
export async function submitWeb3Form(values: FormValues, { subject }: Web3FormsOptions) {
	const payload: Record<string, string | boolean> = {
		access_key: accessKey(),
		subject,
		from_name: asString(values.name) || asString(values.email) || 'Al-Diqqa website',
		botcheck: false,
	};

	for (const [key, value] of Object.entries(values)) {
		if (key === 'consent') {
			payload.consent = value === 'true' || value === true;
			continue;
		}

		payload[key] = asString(value);
	}

	const response = await fetch(WEB3FORMS_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(payload),
	});

	const result = (await response.json().catch(() => null)) as
		| { success?: boolean; message?: string }
		| null;

	if (!response.ok || !result?.success) {
		const error = new Error(result?.message || 'Your form could not be sent.') as Error & {
			status: number;
			response: { data: Record<string, never> };
		};
		error.status = response.status || 400;
		error.response = { data: {} };
		throw error;
	}

	return result;
}
