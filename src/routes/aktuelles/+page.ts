export async function load({ params }) {
    // FIXME change this to point to a proper file
    const url = 'https://raw.githubusercontent.com/taskforcehellcat/json-data/main/test.json';
    let response = fetch(url);

    let json = (await response).json();

    return {
        campaignData: json
    }
}