import 'dotenv/config'
import { request, gql, GraphQLClient } from 'graphql-request'

class GQLClient {
    endpoint = process.env.ENDPOINT;
    client = new GraphQLClient(this.endpoint, { headers: {} })

    async loginMutation(email: string) {
        return this.makeRequestAndReturn(gql`mutation LoginUser {
            login(email: "${email}") {
              token
            }
          }`);
    }

    async meQuery() {
        return this.makeRequestAndReturn(gql`query Me {
            me {
              email
            }
          }`);
    }

    async launchQuery(id: number) {
        return this.makeRequestAndReturn(gql`query Launch {
            launch(id: ${id}) {
              site, mission { name }, rocket { name }
            }
          }`);
    }

    async launchesQuery(pageSize: number) {
        return this.makeRequestAndReturn(gql`query Launches {
            launches(pageSize: ${pageSize}) {
              launches {
                id
              }
            }
          }`);
    }

    async bookTrips(launchIds: number) {
        return this.makeRequestAndReturn(gql`mutation BookTrips {
            bookTrips(launchIds: ${launchIds}) {
              success
            }
          }`);
    }



    private async makeRequestAndReturn(query: string) {
        const data = await this.client.request(query);
        return data;
    }

    setToken(token: string) {
        this.client.setHeader("Authorization", token)
    }
}

export default new GQLClient();