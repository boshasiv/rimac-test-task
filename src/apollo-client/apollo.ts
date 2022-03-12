import gqlClient from "./gql-client";

class Apollo {

    async isHealthy() {
        gqlClient.meQuery().then(resolved => {
            return true;
        }, rejected => {
            return false;
        }).catch(error => {
            console.log(error);
            return false;
        })
    }

    async login(email: string) {
        const data = await gqlClient.loginMutation(email);
        gqlClient.setToken(data.login.token);
    }

    async me() {
        const data = await gqlClient.meQuery();
        return data;
    }

    async launch(id: number) {
        const data = await gqlClient.launchQuery(id);
        return data;
    }

    async getLaunches(pageSize: number) {
        const data = await gqlClient.launchesQuery(pageSize);
        return data;
    }

    async bookTrips(launchIds: number) {
        const data = await gqlClient.bookTrips(launchIds);
        return data;
    }
}

export default new Apollo()