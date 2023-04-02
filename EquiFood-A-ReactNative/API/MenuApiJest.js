import axios from "axios";
import { getMenu, getFoodItem } from "./MenuAPI";
jest.mock("axios");

describe("Menu functions", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    describe("getMenu", () => {
        it("should return menu data when request is successful", async () => {
            const data = { /* your test data */ };
            axios.get.mockResolvedValue({ data });
            const restaurantId = 1;

            const result = await getMenu(restaurantId);

            expect(result).toEqual(data);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(
                `${config.local.url}:${config.local.port}/Menu/${restaurantId}`
            );
        });

        it("should log error when request fails", async () => {
            const error = new Error("Request failed");
            axios.get.mockRejectedValue(error);
            const restaurantId = 123;
            const consoleSpy = jest.spyOn(console, "error");

            await getMenu(restaurantId);

            expect(consoleSpy).toHaveBeenCalledWith(error);
        });
    });

    describe("getFoodItem", () => {
        it("should return food item data when request is successful", async () => {
            const data = { /* your test data */ };
            axios.get.mockResolvedValue({ data });
            const menuItemId = 456;

            const result = await getFoodItem(menuItemId);

            expect(result).toEqual(data);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(
                `${config.local.url}:${config.local.port}/Menu/${menuItemId}`

            );
        });

        it("should log error when request fails", async () => {
            const error = new Error("Request failed");
            axios.get.mockRejectedValue(error);
            const menuItemId = 456;
            const consoleSpy = jest.spyOn(console, "error");

            await getFoodItem(menuItemId);

            expect(consoleSpy).toHaveBeenCalledWith(error);
        });
    });
});