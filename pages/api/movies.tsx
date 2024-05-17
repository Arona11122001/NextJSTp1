export default async function handler(req, res) {
    try {
        const response = await fetch("https://reactnative.dev/movies.json");

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données");
        }

        const movies = await response.json();

        res.status(200).json(movies.movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
