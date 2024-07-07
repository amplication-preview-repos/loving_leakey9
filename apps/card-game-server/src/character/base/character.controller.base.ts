/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CharacterService } from "../character.service";
import { CharacterCreateInput } from "./CharacterCreateInput";
import { Character } from "./Character";
import { CharacterFindManyArgs } from "./CharacterFindManyArgs";
import { CharacterWhereUniqueInput } from "./CharacterWhereUniqueInput";
import { CharacterUpdateInput } from "./CharacterUpdateInput";

export class CharacterControllerBase {
  constructor(protected readonly service: CharacterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Character })
  async createCharacter(
    @common.Body() data: CharacterCreateInput
  ): Promise<Character> {
    return await this.service.createCharacter({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Character] })
  @ApiNestedQuery(CharacterFindManyArgs)
  async characters(@common.Req() request: Request): Promise<Character[]> {
    const args = plainToClass(CharacterFindManyArgs, request.query);
    return this.service.characters({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async character(
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<Character | null> {
    const result = await this.service.character({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCharacter(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() data: CharacterUpdateInput
  ): Promise<Character | null> {
    try {
      return await this.service.updateCharacter({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCharacter(
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<Character | null> {
    try {
      return await this.service.deleteCharacter({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
